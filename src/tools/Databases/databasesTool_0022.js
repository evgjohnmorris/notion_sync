/**
 * Generated Tool: databasesTool_0022
 * Domain: Databases
 * ID: 0022
 */
exports.databasesTool_0022 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0022:', error);
    throw error;
  }
};
