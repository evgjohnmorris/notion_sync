/**
 * Generated Tool: databasesTool_0152
 * Domain: Databases
 * ID: 0152
 */
exports.databasesTool_0152 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0152:', error);
    throw error;
  }
};
