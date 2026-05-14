/**
 * Generated Tool: databasesTool_0001
 * Domain: Databases
 * ID: 0001
 */
exports.databasesTool_0001 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0001:', error);
    throw error;
  }
};
