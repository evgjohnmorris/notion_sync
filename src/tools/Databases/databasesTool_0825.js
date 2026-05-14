/**
 * Generated Tool: databasesTool_0825
 * Domain: Databases
 * ID: 0825
 */
exports.databasesTool_0825 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0825:', error);
    throw error;
  }
};
