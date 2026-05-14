/**
 * Generated Tool: databasesTool_0091
 * Domain: Databases
 * ID: 0091
 */
exports.databasesTool_0091 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0091:', error);
    throw error;
  }
};
