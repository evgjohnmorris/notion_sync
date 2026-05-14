/**
 * Generated Tool: databasesTool_0813
 * Domain: Databases
 * ID: 0813
 */
exports.databasesTool_0813 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0813:', error);
    throw error;
  }
};
