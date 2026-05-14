/**
 * Generated Tool: databasesTool_0274
 * Domain: Databases
 * ID: 0274
 */
exports.databasesTool_0274 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0274:', error);
    throw error;
  }
};
