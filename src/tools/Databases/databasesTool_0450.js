/**
 * Generated Tool: databasesTool_0450
 * Domain: Databases
 * ID: 0450
 */
exports.databasesTool_0450 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0450:', error);
    throw error;
  }
};
