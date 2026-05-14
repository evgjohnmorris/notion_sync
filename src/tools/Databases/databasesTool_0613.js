/**
 * Generated Tool: databasesTool_0613
 * Domain: Databases
 * ID: 0613
 */
exports.databasesTool_0613 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0613:', error);
    throw error;
  }
};
