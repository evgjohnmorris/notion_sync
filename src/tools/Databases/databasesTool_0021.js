/**
 * Generated Tool: databasesTool_0021
 * Domain: Databases
 * ID: 0021
 */
exports.databasesTool_0021 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0021:', error);
    throw error;
  }
};
