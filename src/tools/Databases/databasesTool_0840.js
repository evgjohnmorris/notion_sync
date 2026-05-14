/**
 * Generated Tool: databasesTool_0840
 * Domain: Databases
 * ID: 0840
 */
exports.databasesTool_0840 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0840:', error);
    throw error;
  }
};
