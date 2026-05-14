/**
 * Generated Tool: databasesTool_0965
 * Domain: Databases
 * ID: 0965
 */
exports.databasesTool_0965 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0965:', error);
    throw error;
  }
};
