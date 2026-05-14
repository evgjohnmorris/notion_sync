/**
 * Generated Tool: databasesTool_0884
 * Domain: Databases
 * ID: 0884
 */
exports.databasesTool_0884 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0884:', error);
    throw error;
  }
};
