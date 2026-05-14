/**
 * Generated Tool: databasesTool_0440
 * Domain: Databases
 * ID: 0440
 */
exports.databasesTool_0440 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0440:', error);
    throw error;
  }
};
