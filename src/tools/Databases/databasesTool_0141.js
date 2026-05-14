/**
 * Generated Tool: databasesTool_0141
 * Domain: Databases
 * ID: 0141
 */
exports.databasesTool_0141 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0141:', error);
    throw error;
  }
};
