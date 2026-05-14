/**
 * Generated Tool: databasesTool_0428
 * Domain: Databases
 * ID: 0428
 */
exports.databasesTool_0428 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0428:', error);
    throw error;
  }
};
