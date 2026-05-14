/**
 * Generated Tool: databasesTool_0591
 * Domain: Databases
 * ID: 0591
 */
exports.databasesTool_0591 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0591:', error);
    throw error;
  }
};
