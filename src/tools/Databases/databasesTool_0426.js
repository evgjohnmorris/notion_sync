/**
 * Generated Tool: databasesTool_0426
 * Domain: Databases
 * ID: 0426
 */
exports.databasesTool_0426 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0426:', error);
    throw error;
  }
};
