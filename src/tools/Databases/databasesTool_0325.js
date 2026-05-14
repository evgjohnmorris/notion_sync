/**
 * Generated Tool: databasesTool_0325
 * Domain: Databases
 * ID: 0325
 */
exports.databasesTool_0325 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0325:', error);
    throw error;
  }
};
