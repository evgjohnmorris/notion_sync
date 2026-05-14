/**
 * Generated Tool: databasesTool_0985
 * Domain: Databases
 * ID: 0985
 */
exports.databasesTool_0985 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0985:', error);
    throw error;
  }
};
