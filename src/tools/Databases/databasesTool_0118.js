/**
 * Generated Tool: databasesTool_0118
 * Domain: Databases
 * ID: 0118
 */
exports.databasesTool_0118 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0118:', error);
    throw error;
  }
};
