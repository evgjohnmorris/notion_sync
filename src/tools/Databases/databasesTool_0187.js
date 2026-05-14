/**
 * Generated Tool: databasesTool_0187
 * Domain: Databases
 * ID: 0187
 */
exports.databasesTool_0187 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0187:', error);
    throw error;
  }
};
