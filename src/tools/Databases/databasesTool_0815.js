/**
 * Generated Tool: databasesTool_0815
 * Domain: Databases
 * ID: 0815
 */
exports.databasesTool_0815 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0815:', error);
    throw error;
  }
};
