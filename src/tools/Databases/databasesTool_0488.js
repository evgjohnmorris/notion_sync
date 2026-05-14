/**
 * Generated Tool: databasesTool_0488
 * Domain: Databases
 * ID: 0488
 */
exports.databasesTool_0488 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0488:', error);
    throw error;
  }
};
