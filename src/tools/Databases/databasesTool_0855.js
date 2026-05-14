/**
 * Generated Tool: databasesTool_0855
 * Domain: Databases
 * ID: 0855
 */
exports.databasesTool_0855 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0855:', error);
    throw error;
  }
};
