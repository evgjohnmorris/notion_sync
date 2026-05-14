/**
 * Generated Tool: databasesTool_0736
 * Domain: Databases
 * ID: 0736
 */
exports.databasesTool_0736 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0736:', error);
    throw error;
  }
};
