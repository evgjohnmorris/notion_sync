/**
 * Generated Tool: databasesTool_0572
 * Domain: Databases
 * ID: 0572
 */
exports.databasesTool_0572 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0572:', error);
    throw error;
  }
};
