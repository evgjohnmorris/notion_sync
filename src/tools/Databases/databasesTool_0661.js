/**
 * Generated Tool: databasesTool_0661
 * Domain: Databases
 * ID: 0661
 */
exports.databasesTool_0661 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0661:', error);
    throw error;
  }
};
