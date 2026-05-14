/**
 * Generated Tool: databasesTool_0235
 * Domain: Databases
 * ID: 0235
 */
exports.databasesTool_0235 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0235:', error);
    throw error;
  }
};
