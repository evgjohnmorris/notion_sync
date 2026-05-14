/**
 * Generated Tool: databasesTool_0009
 * Domain: Databases
 * ID: 0009
 */
exports.databasesTool_0009 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0009:', error);
    throw error;
  }
};
