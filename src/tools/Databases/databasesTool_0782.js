/**
 * Generated Tool: databasesTool_0782
 * Domain: Databases
 * ID: 0782
 */
exports.databasesTool_0782 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0782:', error);
    throw error;
  }
};
