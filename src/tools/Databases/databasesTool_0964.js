/**
 * Generated Tool: databasesTool_0964
 * Domain: Databases
 * ID: 0964
 */
exports.databasesTool_0964 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0964:', error);
    throw error;
  }
};
