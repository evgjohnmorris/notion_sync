/**
 * Generated Tool: databasesTool_0333
 * Domain: Databases
 * ID: 0333
 */
exports.databasesTool_0333 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0333:', error);
    throw error;
  }
};
