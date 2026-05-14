/**
 * Generated Tool: databasesTool_0384
 * Domain: Databases
 * ID: 0384
 */
exports.databasesTool_0384 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0384:', error);
    throw error;
  }
};
