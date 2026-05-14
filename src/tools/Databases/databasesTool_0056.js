/**
 * Generated Tool: databasesTool_0056
 * Domain: Databases
 * ID: 0056
 */
exports.databasesTool_0056 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0056:', error);
    throw error;
  }
};
