/**
 * Generated Tool: databasesTool_0536
 * Domain: Databases
 * ID: 0536
 */
exports.databasesTool_0536 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0536:', error);
    throw error;
  }
};
