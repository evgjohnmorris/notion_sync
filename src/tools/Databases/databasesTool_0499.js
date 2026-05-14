/**
 * Generated Tool: databasesTool_0499
 * Domain: Databases
 * ID: 0499
 */
exports.databasesTool_0499 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0499:', error);
    throw error;
  }
};
