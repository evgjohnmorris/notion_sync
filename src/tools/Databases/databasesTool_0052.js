/**
 * Generated Tool: databasesTool_0052
 * Domain: Databases
 * ID: 0052
 */
exports.databasesTool_0052 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0052:', error);
    throw error;
  }
};
