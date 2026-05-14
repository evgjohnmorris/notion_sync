/**
 * Generated Tool: databasesTool_0644
 * Domain: Databases
 * ID: 0644
 */
exports.databasesTool_0644 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0644:', error);
    throw error;
  }
};
