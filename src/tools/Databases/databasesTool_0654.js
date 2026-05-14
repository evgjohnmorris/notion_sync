/**
 * Generated Tool: databasesTool_0654
 * Domain: Databases
 * ID: 0654
 */
exports.databasesTool_0654 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0654:', error);
    throw error;
  }
};
