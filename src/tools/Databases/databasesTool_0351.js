/**
 * Generated Tool: databasesTool_0351
 * Domain: Databases
 * ID: 0351
 */
exports.databasesTool_0351 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0351:', error);
    throw error;
  }
};
