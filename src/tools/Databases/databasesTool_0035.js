/**
 * Generated Tool: databasesTool_0035
 * Domain: Databases
 * ID: 0035
 */
exports.databasesTool_0035 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0035:', error);
    throw error;
  }
};
