/**
 * Generated Tool: databasesTool_0385
 * Domain: Databases
 * ID: 0385
 */
exports.databasesTool_0385 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0385:', error);
    throw error;
  }
};
