/**
 * Generated Tool: databasesTool_0552
 * Domain: Databases
 * ID: 0552
 */
exports.databasesTool_0552 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0552:', error);
    throw error;
  }
};
