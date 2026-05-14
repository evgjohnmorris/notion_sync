/**
 * Generated Tool: databasesTool_0177
 * Domain: Databases
 * ID: 0177
 */
exports.databasesTool_0177 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0177:', error);
    throw error;
  }
};
