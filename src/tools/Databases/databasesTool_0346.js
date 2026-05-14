/**
 * Generated Tool: databasesTool_0346
 * Domain: Databases
 * ID: 0346
 */
exports.databasesTool_0346 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0346:', error);
    throw error;
  }
};
