/**
 * Generated Tool: databasesTool_0910
 * Domain: Databases
 * ID: 0910
 */
exports.databasesTool_0910 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0910:', error);
    throw error;
  }
};
