/**
 * Generated Tool: databasesTool_0197
 * Domain: Databases
 * ID: 0197
 */
exports.databasesTool_0197 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0197:', error);
    throw error;
  }
};
