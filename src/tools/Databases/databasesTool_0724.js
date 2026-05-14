/**
 * Generated Tool: databasesTool_0724
 * Domain: Databases
 * ID: 0724
 */
exports.databasesTool_0724 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0724:', error);
    throw error;
  }
};
