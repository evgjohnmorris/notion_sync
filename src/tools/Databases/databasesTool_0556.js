/**
 * Generated Tool: databasesTool_0556
 * Domain: Databases
 * ID: 0556
 */
exports.databasesTool_0556 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0556:', error);
    throw error;
  }
};
