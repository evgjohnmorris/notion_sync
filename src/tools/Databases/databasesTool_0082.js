/**
 * Generated Tool: databasesTool_0082
 * Domain: Databases
 * ID: 0082
 */
exports.databasesTool_0082 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0082:', error);
    throw error;
  }
};
