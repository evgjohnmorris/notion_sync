/**
 * Generated Tool: databasesTool_0953
 * Domain: Databases
 * ID: 0953
 */
exports.databasesTool_0953 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0953:', error);
    throw error;
  }
};
