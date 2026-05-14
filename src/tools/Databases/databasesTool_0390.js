/**
 * Generated Tool: databasesTool_0390
 * Domain: Databases
 * ID: 0390
 */
exports.databasesTool_0390 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0390:', error);
    throw error;
  }
};
