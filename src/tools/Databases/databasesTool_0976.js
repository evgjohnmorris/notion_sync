/**
 * Generated Tool: databasesTool_0976
 * Domain: Databases
 * ID: 0976
 */
exports.databasesTool_0976 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0976:', error);
    throw error;
  }
};
